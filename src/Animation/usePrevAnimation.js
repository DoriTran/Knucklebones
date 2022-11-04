const usePrevAnimation = (props) => {
    // Style
    let [prevStart, prevUpdate, prevProp, prevStyle, prevTransform] = [{}, {}, {}, {}, {transform: "", WebkitTransform: ""}];

    // Property
    Object.entries(props).forEach(([key, each]) => {
        if (key === "style") {
            Object.entries(each).forEach(([property, value]) => {
                if (property !== "WebkitTransform" && property !== "transform") prevStyle = {...prevStyle, [property]: value};
                else prevTransform = {...prevTransform, [property]: value};
            })
        }
        else if (["children", "duration", "show"].indexOf(key) === -1) {
            prevProp = {...prevProp, [key]: each}
            Object.entries(each).forEach(([property, value]) => {
                prevStart = {...prevStart, [property]: value};
                prevUpdate = {...prevUpdate, [property]: [value]}                 
            })
        }
    });
    return [prevStart, prevUpdate, prevProp, prevStyle, prevTransform];
}
 
export default usePrevAnimation;