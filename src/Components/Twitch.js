import { TwitchEmbed } from 'react-twitch-embed';

const Twitch = () => {
  return (
    <div>
      <TwitchEmbed
        channel="mrchaggy"
        id="mrchaggy"
        theme="dark"
        muted
      />
    </div>
  );
}

export default Twitch;