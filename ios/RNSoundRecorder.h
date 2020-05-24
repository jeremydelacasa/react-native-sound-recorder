
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

#import <React/RCTEventEmitter.h>
#import <AVFoundation/AVFoundation.h>

@interface RNSoundRecorder : RCTEventEmitter <RCTBridgeModule,AVAudioRecorderDelegate>

@end


