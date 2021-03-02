<template>
  <div class="the-pathfinder-title-sequence">
    <svg
      id="logo-to-anim"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 260 360.6"
      style="enable-background:new 0 0 260 360.6;"
      xml:space="preserve"
    >
      <path
        class="st0 triangle-p"
        d="M45,360.6v-300h200L45,360.6z"
        desc="triangle-p"
      />
      <path
        class="st1 triangle-d"
        d="M160,45.6h-50H60v200h50h50c55.2,0,100-44.8,100-100S215.2,45.6,160,45.6z"
        desc="triangle-d"
      />
      <path
        class="st0 donut"
        d="M223.3,10c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S220.6,10,223.3,10 M223.3,0c-8.3,0-15,6.7-15,15
          s6.7,15,15,15s15-6.7,15-15S231.6,0,223.3,0L223.3,0z"
        desc="donut"
      />
      <path
        class="st2 triangle"
        desc="triangle"
        d="M0,198.9l10-20l10,20H0z"
      />
      <path
        class="st1 top-box"
        desc="top-box"
        d="M10,10.6h30v30H10V10.6z"
      />
      <path
        class="st0 bottom-box"
        desc="bottom-box"
        d="M188.3,278.6h20v20h-20V278.6z"
      />
    </svg>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  mounted () {
    const intro = anime.timeline()

    // Vertical spine.
    intro.add({
      targets: '.triangle-p',
      strokeDashoffset: [anime.setDashoffset, 750],
      easing: 'linear',
      duration: 750,
      complete () {
        setTimeout(() => {
          anime({
            targets: '.triangle-p',
            strokeDashoffset: 0,
            easing: 'steps(0)',
            duration: 0
          })
        }, 250)
      },
      begin () {
        anime({
          targets: '#logo-to-anim',
          translateX: 1250,
          translateY: -1750,
          scale: 7.5,
          easing: 'steps(1)',
          duration: 750
        })
      }
    })

    // Circle.
    intro.add({
      targets: '.donut',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 750,
      begin () {
        anime({
          targets: '#logo-to-anim',
          duration: 750,
          translateX: -2000,
          translateY: 3500,
          easing: 'steps(1)',
          scale: 15
        })
      }
    })

    // Triangle zoom.
    intro.add({
      targets: '.triangle',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 750,
      begin () {
        anime({
          targets: '#logo-to-anim',
          translateX: 4250,
          translateY: -500,
          scale: 25,
          easing: 'steps(1)',
          duration: 750
        })
      }
    })

    // Cross zoom.
    intro.add({
      targets: '.triangle-d',
      strokeDashoffset: [-700, -600],
      strokeDasharray: ['1000, 1000', '1000, 1000'],
      easing: 'easeOutCirc',
      duration: 750,
      begin () {
        anime({
          targets: '#logo-to-anim',
          translateX: -2000,
          translateY: 2500,
          scale: 15,
          easing: 'steps(1)',
          duration: 500
        })
      },
      complete: () => {
        // Do the full reveal.
        anime({
          targets: ['.bottom-box'],
          translateY: [-25, 0],
          opacity: [0, 1],
          easing: 'easeOutCirc',
          duration: 3000,
          loop: 1
        })

        anime({
          targets: ['.top-box'],
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeOutCirc',
          translateY: [25, 0],
          duration: 3500,
          loop: 1
        })

        anime({
          targets: '.triangle-d',
          strokeDashoffset: [130, 130],
          translateY: [50, 0],
          strokeDasharray: ['136.5%, 80%', '136.5%, 0%'],
          easing: 'easeOutCirc',
          duration: 5000,
          loop: 1
        })

        // Overall zoom out.
        anime({
          targets: '#logo-to-anim',
          translateX: [0, 0],
          translateY: [0, 0],
          scale: [5, 1],
          duration: 2500,
          easing: 'easeOutCirc',
          complete: () => {
            this.$emit('title-sequence-completed')
          }
        })
      }
    })
  }

}
</script>

<style lang="scss" scoped>
.st0 {
  stroke: #d81b5a;
}

.st1 {
  stroke: #febf4f;
}

.st2 {
  stroke: #00aeef;
}

.st0,
.st1,
.st2 {
  fill: transparent;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.the-pathfinder-title-sequence-wrapper,
.the-pathfinder-title-sequence {
  width: 100%;
  height: 100%;
}

#logo-to-anim {
  max-width: 25rem;
  overflow: visible;
}

.the-pathfinder-title-sequence {
  display: flex;
  overflow: hidden;
  justify-content: center;
  overflow: visible;
}

</style>
