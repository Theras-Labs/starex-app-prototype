import { useLoader } from "@react-three/fiber";
import { EffectComposer, SSR, Bloom, LUT } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import CUBE from "./F-6800-STD.cube";

export function Effects() {
  const texture = useLoader(LUTCubeLoader, CUBE);

  // Define your properties directly
  const ssrProps = {
    enabled: true,
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    DITHERING: false,
    temporalResolveMix: 0.9,
    temporalResolveCorrectionMix: 0.4,
    maxSamples: 0,
    resolutionScale: 1,
    blurMix: 0.2,
    blurKernelSize: 8,
    BLUR_EXPONENT: 10,
    rayStep: 0.5,
    intensity: 2.5,
    maxRoughness: 1,
    jitter: 0.3,
    jitterSpread: 0.25,
    jitterRough: 0.1,
    roughnessFadeOut: 1,
    rayFadeOut: 0,
    MAX_STEPS: 20,
    NUM_BINARY_SEARCH_STEPS: 6,
    maxDepthDifference: 5,
    maxDepth: 1,
    thickness: 3,
    ior: 1.45,
  };

  return (
    <EffectComposer disableNormalPass>
      <SSR {...ssrProps} />
      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.75}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
