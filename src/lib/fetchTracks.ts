const apiToken: string =
  'BQCPxEPPFgCJbFF9vGGRLoJHd86uneNJJP-byEoQurqlyeR6LifQPbKk6SrCTw5W2vBLJNWIPk-PguEAraeIbTGGm-g7vcu0Uwz3NTmbU5TPCcIWm9b_IAlDHc-2275PcTNlTfd8nP5pC6DZXHq3Mm2IQkvAq0Z_jvgWCdGgL0BBv1i2rfRTtyPOJGG7eDBKlfmhJeSXpniRgkquj51w3rQ';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
