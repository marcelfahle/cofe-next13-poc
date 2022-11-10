import React from "react";

type Cell = {
  size: string;
  className?: string;
  children?: React.ReactNode;
};

function Cell({ size, className, children }: Cell) {
  let styles;
  if (size === "viewport") {
    styles = {
      width: "100vw",
      gridColumn: "span 12 / span 12",
      marginLeft: "50%",
      transform: "translateX(-50%)",
    };
  } else {
    styles = {
      gridColumn: `span ${size} / span ${size}`,
    };
  }
  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:px-auto px-4 sm:px-8">
      <div className="grid grid-cols-12 gap-x-5 mx-2.5">{children}</div>
    </div>
  );
}

function NotFound({ type }: { type: string }) {
  return (
    <div className="border border-red-300 text-red-300">
      {" "}
      Missing Tastic : {type}
    </div>
  );
}

type Renderer = {
  data: any;
  components: any;
};

export function PageRenderer({ data, components }: Renderer) {
  return (
    <Grid>
      {data?.page?.sections?.main?.layoutElements.map((layoutElement: any) => (
        <Cell
          size={layoutElement.configuration.size}
          key={layoutElement.layoutElementId}
        >
          {layoutElement.tastics.map((t: any) => {
            console.log({ t });
            const Component = components[t.tasticType] || NotFound;
            return (
              <Component
                id={t.tasticId}
                key={t.tasticId}
                type={t.tasticType}
                data={t.configuration}
              />
            );
          })}
        </Cell>
      ))}
    </Grid>
  );
}
