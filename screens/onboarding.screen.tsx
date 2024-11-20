import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { onBoardingSlides } from "@/configs/constants";
import Slider from "@/components/onboarding/slider";
import Slide from "@/components/onboarding/slide";

export default function OnboardingScreen() {
  const [index, setIndex] = React.useState(0);
  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && (
            <Slide
              index={index}
              setIndex={setIndex}
              slide={prev}
              totalSlides={onBoardingSlides.length}
            />
          )
        }
        next={
          next && (
            <Slide
              index={index}
              setIndex={setIndex}
              slide={next}
              totalSlides={onBoardingSlides.length}
            />
          )
        }
      >
        <Slide
          index={index}
          setIndex={setIndex}
          slide={onBoardingSlides[index]}
          totalSlides={onBoardingSlides.length}
        />
      </Slider>
    </GestureHandlerRootView>
  );
}
