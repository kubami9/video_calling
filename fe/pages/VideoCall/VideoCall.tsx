import { useEffect, useRef, useState } from "react";
import { getMediaDevices } from "../../utils/webrtc.helper.ts";
import { ReadyState } from "react-use-websocket";
import Chat from "../../components/Chat/Chat.tsx";
import { Message, MessagePayload } from "@shared/types/types.ts";

type VideoCallParams = {
  sendJsonMessage: (message: MessagePayload, keep?: boolean) => void;
  lastMessage: MessageEvent<string>;
  lastJsonMessage: {
    userId: string;
    messages: Message[];
  };
  readyState: ReadyState;
};

const VideoCall = (params: VideoCallParams) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const recipentIdRef = useRef<HTMLInputElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    playVideoFromCamera();
  }, []);

  const playVideoFromCamera = async () => {
    try {
      const mediaStream = await getMediaDevices();
      (videoRef.current as HTMLVideoElement).srcObject = mediaStream;
      setIsVideoLoaded(true);
    } catch (err) {
      console.error("Error accessing media devices.", err);
    }
  };

  const {
    sendJsonMessage,
    lastJsonMessage,
    lastMessage,
    readyState,
  } = params;

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const sendMessage = (text: string) => {
    const message: MessagePayload = {
      text,
      recipentId: recipentIdRef?.current?.value ?? "",
    };
    sendJsonMessage(message);
  };

  console.log(lastMessage?.data);

  return (
    <div>
      <h4>WebSocket connection is {connectionStatus}</h4>
      <div style={{ border: "1px solid #eee" }}>
        <h3>Chat</h3>
        <div
          style={{
            whiteSpace: "pre-line",
            textAlign: "left",
            paddingLeft: 40,
          }}
        >
          <Chat
            messages={lastMessage?.data &&
              JSON.parse(lastMessage?.data)}
          />
        </div>
        <input type="text" placeholder="message" ref={messageRef} />
        <input
          type="text"
          placeholder="recipent id"
          ref={recipentIdRef}
        />
        <button onClick={() => sendMessage(messageRef?.current?.value ?? "")}>
          send message
        </button>
      </div>
      <div style={{ border: "1px solid #eee" }}>
        <h3>Video chat</h3>
        <video
          ref={videoRef}
          autoPlay={true}
          controls={false}
          playsInline={true}
          muted={true}
        >
        </video>
      </div>
    </div>
  );
};

export default VideoCall;
