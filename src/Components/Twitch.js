import { TwitchEmbed, TwitchPlayer } from "react-twitch-embed";

const Twitch = () => {
  return (
    <div>
      <TwitchPlayer channel="mrchaggy" parent={['moriadnd.com']}/>
    </div>
  );
};

export default Twitch;
