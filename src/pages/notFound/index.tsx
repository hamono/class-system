import FlexContainer from "@/components/FlexContainer";
import { useEffect } from "react";
import lottie from "lottie-web";
import lottiePath from "../../assets/notFound.json";

export default function NotFound() {
  
  useEffect((): any => {
    lottie.loadAnimation({
      container: document.getElementById("not-found")!,
      renderer: "canvas",
      loop: true,
      animationData: lottiePath,
    });

    return ()=> lottie.destroy()
  }, []);

  return <FlexContainer style={{width: '100%', height: '100%'}} align="center" content="center">
    <div id="not-found" style={{width: 500, height: 500}}>
    </div>
  </FlexContainer>
}