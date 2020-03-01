import React from 'react'

function Oscillator(props) {
    
    const init = () => {
        // Get audio conext upon instantiation
        this.context = new (window.audioContext || window.webkitAudioContext)()
        // define oscillator node
        this.oscillator = this.context.createOscillator()
        // waveform type
        // should accept wave type from context on user input
        this.oscillator.type = 'sine'
        // create gain node to set initial volume when Oscillator is initialized
        // gain node must be attached to this.context
        this.gainNode = this.context.createGain()
        // chan gainNode to context
        this.oscillator.connect(this.gainNode)
        // route to output
        this.gainNode.connect(this.context.destination)
    }

    const play = () => {
        // on keydown, initialize oscillator — needs to be called every event
        init()
        // get current time from audio context
        const time = this.context.currentTime
        // set frequency
        // should accept frequency from context of synth key
        this.oscillator.frequency.value = 440
        // set gain
        this.gainNode.gain.setValueAtTime(1, time)
        // start oscillator
        this.oscillator.start(time)
    }

    stop = () => {
        // attenuate gain to 0 and stop oscillator on keyUp with passed time value
        const time = this.context.currentTime
        this.gainNode.gain.setValueAtTime(0, time)
        this.oscillator.stop(time)
      }

      return {
        //   TBD
      }
}