import { NativeModules, NativeEventEmitter } from "react-native";

const { RNSoundRecorder } = NativeModules;
const averagePowerEmitter = new NativeEventEmitter(RNSoundRecorder);

var start = RNSoundRecorder.start;
RNSoundRecorder.start = function (path, options) {
  if (options == null) options = {};
  return start(path, options);
};

RNSoundRecorder.onAveragePowerChange = (listener) =>
  averagePowerEmitter.addListener("averagePowerChange", listener);

export default RNSoundRecorder;
