import { useState } from "react";

export const DataFlow = () => {
    return (<div>
        <ParentComponent />
    </div>)
}
function ParentComponent() {
    const [parentParam, setParentParam] = useState("Parent");
    return (<div>
        <strong>Data in Parent Component</strong>

        <p>Parent Param = {parentParam}</p>
        <ChildComponent parentParam={parentParam} setParentParam={setParentParam} />
    </div>)
}
function ChildComponent({ parentParam, setParentParam }) {
    const [childParam, setChildParam] = useState("Child");
    return (<div>
        <strong>Data in Child Component</strong>
        <p> Parent Param ={parentParam}</p>
        <p>Child Param = {childParam}</p>
        <button onClick={() => { setParentParam('Data Updated from Child') }}>Update from Child Component</button>
        <SubChildComponent childParam={childParam} parentParam={parentParam} setParentParam={setParentParam} setChildParam={setChildParam} />
    </div>)
}
function SubChildComponent({ childParam, parentParam, setParentParam, setChildParam }) {
    return (<div>
        <strong> Data in Sub Child Component</strong>
        <p> Parent Param ={parentParam}</p>
        <p>Child Param = {childParam}</p>

        <button onClick={() => { setParentParam('Data Updated from SubChild') }}>Update from SubChild Component</button>

    </div>)
}
