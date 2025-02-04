const constraints = {
  "video": true,
  "audio": true,
};

export const getMediaDevices = async () => {
  return await navigator.mediaDevices.getUserMedia(constraints);
};
