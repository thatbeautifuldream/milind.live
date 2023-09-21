export const PixelGrids = ({ size, scale = 1, header = true, fn }) => {
  const rows = []
  const displaySize = `min(${~~(42 * scale) + "px"}, ${80 / (size + 1)}vw)`
  const negQuarterDisplaySize = `min(${-~~(10.5 * scale) + "px"}, ${
    -20 / (size + 1)
  }vw)`
  for (let i = 0; i < size + 1; i++) {
    const cols = []
    for (let j = 0; j < size + 1; j++) {
      cols.push(
        <div key={j} className="block">
          {fn(j / size, i / size)}
        </div>
      )
    }
    rows.push(cols)
  }
  return (
    <div className="wrapper">
      <div className="screen">
        {header ? (
          <div className="header">
            <div className="coor corner">
              <sub>y</sub>⟍<sup>x</sup>
            </div>
            {rows.map((_, i) => {
              return (
                <div key={`h-${i}`} className="coor">
                  {i}/{size}
                </div>
              )
            })}
          </div>
        ) : null}
        {rows.map((r, i) => {
          return (
            <div key={i} className="row">
              {header ? (
                <div key={`r-${i}`} className="coor">
                  {i}/{size}
                </div>
              ) : null}
              {r.map((c) => {
                return c
              })}
            </div>
          )
        })}
      </div>
      <style jsx>{`
        .wrapper {
          text-align: center;
          padding: 1rem 0.5rem;
          font-feature-settings: "dlig", "kern", "frac", "ss01";
          --grid-border: #d6d6d6;
        }
        .screen {
          display: inline-block;
          margin-left: ${negQuarterDisplaySize};
          ${header
            ? ""
            : `border-top: 1px solid var(--grid-border); border-left: 1px solid var(--grid-border);`}
        }
        .row,
        .header {
          display: flex;
          font-size: 0.7rem;
        }
        .row :global(div.block),
        .coor {
          flex: 0 0 ${displaySize};
          width: ${displaySize};
          height: ${displaySize};
          border-right: 1px solid var(--grid-border);
          border-bottom: 1px solid var(--grid-border);
          display: flex;
          place-content: center;
          place-items: center;
          overflow: hidden;
        }
        .row .coor,
        .corner {
          border-bottom: none;
        }
        .header .coor {
          border-right: none;
        }
        .coor {
          color: #aaa;
          font-size: 1rem;
          font-weight: 300;
          font-variation-settings: "wght" 300;
        }
        .corner sup {
          margin-left: -4px;
          font-style: italic;
        }
        .corner sub {
          bottom: -0.5em;
          margin-right: -2px;
          font-style: italic;
        }
        @media screen and (max-width: 440px) {
          .row {
            font-size: 0.6rem;
          }
          .coor {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  )
}
