import Typewriter from "typewriter-effect";

export function TypeWriter() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Hello, friend", "I'm Gualter Parada"],
          autoStart: true,
          deleteSpeed: 50,
          loop: true,
        }}
      />
    </>
  );
}
