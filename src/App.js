import Dropdown from "./Dropdown";
const options = [
  { value: "React", label: "React" },
  { value: "React Native", label: "React Native" },
  { value: "Vue", label: "Vue" },
  { value: "Angular", label: "Angular" },
  { value: "RxJS", label: "RxJS" },
  { value: "jQuery", label: "jQuery" }
];
function App() {
  return (
    <div>
      <h1>Single Select Dropdown</h1>
      <Dropdown options={options} />

      <h1>Multi-Select Dropdown</h1>
      <Dropdown options={options} isMulti={true} />
    </div>
  );
}
export default App
