import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function TimerSlider({ label, value, min, max, onChange }) {
  return (
    <>
      <div className="flex justify-between my-4">
        <Label>{label}</Label>
        <Label>{`${value} min`}</Label>
      </div>
      <Slider
        value={[value]}  // React Slider expects an array for a single value
        min={min}
        max={max}
        step={1}
        onValueChange={(newValue) => onChange(newValue[0])}  // Pass new value back to parent
      />
    </>
  );
}