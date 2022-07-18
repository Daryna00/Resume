import React, {
    useState,
    useRef,
    useEffect,
} from 'react';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';

const opts = [
    {
        name: 'Novice',
        value: 'nov',
    },
    {
        name: 'Beginner',
        value: 'beg',
        background: '#e75252', // optional
    },
    {
        name: 'Skillful',
        value: 'ski',
        background: '#2e8e65', // optional
    },
    {
        name: 'Experienced',
        value: 'exp',
        background: '#ffc0cb', // optional
    },
    {
        name: 'Expert',
        value: 'exe',
        background: '#8b00ff', // optional
    },
];

const fontStyling = {
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    fontFamily: 'Bebas Neue, sans-serif',
    margin: '3px 0 0 5px',
};

// Usage
function Radios() {
    const [selected, setSelected] = useState(opts[0].value);
    return (
        <Switch
            // Required
            opts={opts}
            selected={selected}
            onChange={(v) => setSelected(v)}
            radioGroupName={'radio demo'}
            // Optional
            containerPad={'.25em'} // Any valid css value or a number
            background={'#fff'}
            borderColor={'#ddd'}
            borderWidth={2} // Number in px can be zero
            activeBg={'#373e96'} // Default value if not specified in opts
            activeTextColor={'#fff'}
            textColor={'#333'}
            textPadTop={'.3em'} // Any valid css value or a number
            textPadBottom={'.17em'} // Nice to have diff values for diff fonts
            style={{
                // For positioning and setting default font values
                margin: 'auto',
                ...fontStyling,
            }}
        />
    );
}

// Comps
const Highlight = styled.span`
  position: absolute;
  background: var(--sd-pill-bg);
  height: var(--sd-pill-height);
  pointer-events: none;
  transition-duration: var(--sd-pill-dur);
  transition-timing-function: ease-out;
  transition-property: transform, background, width;
  left: 0px;
  transform-origin: center;
  ::before,
  ::after {
    transform-origin: center;
    transition-property: transform, background, width;
    transition-duration: var(--sd-pill-dur);
    transition-timing-function: ease-out;
    content: '';
    position: absolute;
    top: 0px;
    height: var(--sd-pill-height);
    width: var(--sd-pill-height);
    background: var(--sd-pill-bg);
    border-radius: 100%;
  }
  ::before {
    left: 0px;
    transform: translateX(-50%);
  }
  ::after {
    right: 0px;
    transform: translateX(50%);
  }
`;
const Container = styled.div`
  position: relative;
  border-radius: 10000px; /* absurd number to ensure circle on edges*/
  display: inline-flex;
`;
const Label = styled.label`
  position: relative;
  padding: 0;
  transition: 0.15s color;
  cursor: pointer;
  user-select: none;
  line-height: 1em;
  transition-property: color;
  transition-duration: var(--sd-pill-dur);
  transition-timing-function: ease-out;
`;
let Input = styled.input`
  position: absolute;
  left: -100vw;
  top: -100vh;
`;
let ExtraPillHitZone = styled.span`
  position: absolute;
  width: var(--sd-pill-height);
  height: var(--sd-pill-height);
  border-radius: var(--sd-pill-height);
  top: 0;
`;

// If value can be a px value return that
// - IE a number `5.5` or `5.5px` will return 5.5
// - IE `5vh`, `5em` etc will return null
function getPx(val) {
    if (isNaN(val)) {
        const parts = val.match(/([0-9\.]+)(.+)/);
        if (parts[1] === 'px') return val[0];
        else return null; // will need to fill with a real value
    } else {
        return val; // no change!
    }
}

function Switch({
                    // Required
                    opts,
                    radioGroupName,
                    selected,
                    onChange,
                    // Optional
                    style,
                    textPadTop = '.25em',
                    textPadBottom = '.25em',
                    containerPad = '.25em',
                    background = '#efefef',
                    borderColor = '#ccc',
                    borderWidth = 1, // inset
                    activeBg = 'purple',
                    activeTextColor = '#fff',
                    textColor = '#222',
                }) {
    const index = opts.findIndex(({ value }) => value === selected);
    const containerRef = useRef(null);
    const containerPadRef = useRef(null);
    const dim = useElemResize(containerRef);

    const refs = useRef([]);
    refs.current = Array.from({ length: opts.length }).map(
        (_, i) => (refs.current[i] = React.createRef())
    );

    // Get containerPadPx for non-px padding values (like ems or rems or vh etc)
    const [containerPadPx, setContainerPadPx] = useState(() =>
        getPx(containerPad)
    );
    useEffect(() => {
        if (containerPadRef && containerPadRef.current) {
            const pad = containerPadRef.current.getBoundingClientRect().width;
            if (containerPadPx !== pad) setContainerPadPx(pad);
        }
    }, [containerPadPx, setContainerPadPx, dim]); // winDim add for responsive re-renders

    // Get placement of active pill
    const [activePos, setActivePos] = useState({ width: 0, left: 0 });
    useEffect(() => {
        if (
            refs?.current?.[index]?.current &&
            containerRef &&
            containerRef.current &&
            containerPadPx !== null
        ) {
            const {
                width: prevWidth,
                left: prevLeft,
                height: prevHeight,
            } = activePos;
            let { width, left: l } =
                refs.current[index].current.getBoundingClientRect();
            const {
                left: containerLeft,
                height: containerHeight,
            } = containerRef.current.getBoundingClientRect();
            const left = l - containerLeft;
            const height = containerHeight - containerPadPx * 2;
            if (width !== prevWidth || left !== prevLeft || height !== prevHeight)
                setActivePos({
                    width,
                    left,
                    height,
                    speed: Math.abs((prevLeft || 0) - left) * 0.0005, // animation speed a factor of change in distance
                });
        }
    }, [activePos, index, containerPadPx, dim]); // winDim add for responsive re-renders
    return (
        <span style={style}>
      {/* Div to get padding value in px */}
            <div ref={containerPadRef} style={{ width: containerPad }} />
            {/* Container - need containerPadPx first */}
            {!isNaN(containerPadPx) && (
                <Container
                    ref={containerRef}
                    style={{
                        '--sd-pill-dur': activePos?.speed
                            ? Math.min(Math.max(activePos?.speed, 0.15), 0.35) + 's'
                            : '.15s',
                        '--sd-pill-bg': opts[index]?.background || activeBg,
                        '--sd-pill-height': `${activePos.height}px`,
                        opacity: activePos?.height ? 1 : 0,
                        background,
                        boxShadow: `inset 0 0 0 ${borderWidth}px ${borderColor}`,
                        padding: `${containerPadPx}px ${
                            containerPadPx + activePos.height / 2 + 1
                        }px`,
                    }}
                >
                    <Highlight
                        style={{
                            top: containerPad,
                            width: activePos.width,
                            transform: `translateX(${activePos.left}px)`,
                        }}
                    />
                    {opts.map(({ name, value }, i) => {
                        const checked = value === selected;
                        return (
                            <Label
                                key={i}
                                style={{
                                    paddingTop: textPadTop, // allows for numbers or css vals
                                    paddingBottom: textPadBottom,
                                    color: checked ? activeTextColor : textColor,
                                    marginRight:
                                        opts.length - 1 === i ? 0 : activePos.height * 0.8 + 'px',
                                }}
                            >
                                <Input
                                    name={radioGroupName}
                                    type={'radio'}
                                    id={name}
                                    checked={checked}
                                    val={value}
                                    key={i}
                                    onChange={() => {
                                        if (onChange) onChange(value);
                                    }}
                                />
                                <ExtraPillHitZone style={{ left: -activePos.height / 2 }} />
                                <ExtraPillHitZone style={{ right: -activePos.height / 2 }} />
                                <span ref={refs.current[i]}>{name}</span>
                            </Label>
                        );
                    })}
                </Container>
            )}
    </span>
    );
}

function useElemResize(
    ref
) {
    // Hook draws inspiration from: ZeeCoder/use-resize-observer
    const [{ width, height }, setDim] = useState({
        width: 1,
        height: 1
    });
    useEffect(() => {
        const el = ref?.current;
        const ro = new ResizeObserver((entries) => {
            if (!entries || !entries.length) return;
            const {
                contentRect: { width, height },
            } = entries[0];
            setDim({ width, height });
        });
        if (el) ro.observe(el);
        return () => {
            if (el) ro.unobserve(el);
        };
    }, [ref]);
    return {width, height};
}

export default Radios;
