export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className='inline-block size-full bg-backOfTile rounded-lg'
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className='size-full bg-frontOfTile rounded-lg flex items-center justify-center relative'>
          <Content
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              color: "white",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className='size-full flex items-center justify-center relative'>
          <Content
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              color: "#C7D2FF",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
