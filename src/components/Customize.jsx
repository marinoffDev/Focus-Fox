import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import TimerSlider from "@/components/ui/TimerSlider";

export default function Customize({ timerSettings, onSaveTimerSettings }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    pomodoro: timerSettings.pomodoro / 60,
    shortBreak: timerSettings.shortBreak / 60,
    longBreak: timerSettings.longBreak / 60,
  });

  useEffect(() => {
    setSettings({
      pomodoro: timerSettings.pomodoro / 60,
      shortBreak: timerSettings.shortBreak / 60,
      longBreak: timerSettings.longBreak / 60,
    });
  }, [timerSettings]);

  const handleChange = (type, value) => {
    setSettings((prev) => ({ ...prev, [type]: value }));
  };

  const handleSave = () => {
    onSaveTimerSettings({
      pomodoro: settings.pomodoro * 60,
      shortBreak: settings.shortBreak * 60,
      longBreak: settings.longBreak * 60,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="ghost">
          <FontAwesomeIcon icon={faGear} size="lg" className="mr-2" />Customize
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Settings</DialogTitle>
          <Separator />
        </DialogHeader>
        <DialogDescription>
          <TimerSlider
            label="Pomodoro"
            value={settings.pomodoro}
            min={1}
            max={60}
            onChange={(value) => handleChange("pomodoro", value)}
          />
          <TimerSlider
            label="Short Break"
            value={settings.shortBreak}
            min={1}
            max={30}
            onChange={(value) => handleChange("shortBreak", value)}
          />
          <TimerSlider
            label="Long Break"
            value={settings.longBreak}
            min={1}
            max={60}
            onChange={(value) => handleChange("longBreak", value)}
          />
        </DialogDescription>
        <DialogFooter className="mt-4 flex justify-center">
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}