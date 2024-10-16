import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function CustomSlider({ label, unit, value, min, max, onChange, isTimerControls, step }) {
  return (
    <>
      <div className="flex justify-between my-4">
        <Label>{label}</Label>
        {isTimerControls && <Label>{`${value} ${value > 1 ? unit + 's' : unit}`}</Label>}
        {!isTimerControls && <Label>{`${value} ${unit}`}</Label>}
      </div>
      <Slider
        value={[value]}  // React Slider expects an array for a single value
        min={min}
        max={max}
        step={step || 1}
        onValueChange={(newValue) => onChange(newValue[0])}  // Pass new value back to parent
      />
    </>
  );
}