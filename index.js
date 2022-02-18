import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  VrButton,
  asset
} from 'react-360';

const {AudioModule} = NativeModules;

export default class WelcomeTo360 extends React.Component {

  constructor(){
    super();

  }

  createAudio()
  {
    AudioModule.createAudio('myplayer', {
      source: asset('audio.mp3'),
      volume: 0.5,
    });
    console.log('Audio instance created');
  }

  playAudio()
  {
    AudioModule.play('myplayer', {
    });
    console.log('playAudio called');
  }

  muteAudio()
  {
    AudioModule.setParams('myplayer', {
      //muted: true,
      volume: 0,
      fadeTime: 1000,
    });
  }

  stopAudio()
  {
    AudioModule.stop('myplayer');
  }

  render() {
    return (
      <View style={styles.panel}>

        <VrButton onClick={() => {this.createAudio()}}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Create audio
            </Text>
          </View>
        </VrButton>

        <VrButton onClick={() => {this.playAudio()}}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Play
            </Text>
          </View>
        </VrButton>

        <VrButton onClick={() => {this.muteAudio()}}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Mute
            </Text>
          </View>
        </VrButton>

        <VrButton onClick={() => {this.stopAudio()}}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Stop
            </Text>
          </View>
        </VrButton>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('WelcomeTo360', () => WelcomeTo360);
