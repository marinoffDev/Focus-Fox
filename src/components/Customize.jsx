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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import TimerSlider from "@/components/ui/TimerSlider";
import { defaultSettings } from "@/lib/defaultSettings"
import { notificationSounds } from "@/lib/notificationSounds"

export default function Customize({ timerSettings, onSaveTimerSettings }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState({
    pomodoro: timerSettings.pomodoro / 60,
    shortBreak: timerSettings.shortBreak / 60,
    longBreak: timerSettings.longBreak / 60,
    sessionRounds: timerSettings.sessionRounds,
    notificationSound: timerSettings.notificationSound
  });

  useEffect(() => {
    setSettings({
      pomodoro: timerSettings.pomodoro / 60,
      shortBreak: timerSettings.shortBreak / 60,
      longBreak: timerSettings.longBreak / 60,
      sessionRounds: timerSettings.sessionRounds,
      notificationSound: timerSettings.notificationSound
    });
  }, [timerSettings]);

  const handleChange = (type, value) => {
    setSettings((prev) => ({ ...prev, [type]: value }));
  };

  const handleSoundChange = (value) => {
    setSettings((prev) => ({ ...prev, notificationSound: value }));
    const sound = new Audio(value);
    sound.play();
  };

  const handleReset = () => {
    setSettings({
      pomodoro: defaultSettings.pomodoro / 60,
      shortBreak: defaultSettings.shortBreak / 60,
      longBreak: defaultSettings.longBreak / 60,
      sessionRounds: defaultSettings.sessionRounds,
      notificationSound: defaultSettings.notificationSound
    });
  };
  
  const handleSave = () => {
    onSaveTimerSettings({
      pomodoro: settings.pomodoro * 60,
      shortBreak: settings.shortBreak * 60,
      longBreak: settings.longBreak * 60,
      sessionRounds: settings.sessionRounds,
      notificationSound: settings.notificationSound
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={true}>
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
            unit="minute"
            value={settings.pomodoro}
            min={1}
            max={60}
            onChange={(value) => handleChange("pomodoro", value)}
          />
          <TimerSlider
            label="Short Break"
            unit="minute"
            value={settings.shortBreak}
            min={1}
            max={30}
            onChange={(value) => handleChange("shortBreak", value)}
          />
          <TimerSlider
            label="Long Break"
            unit="minute"
            value={settings.longBreak}
            min={1}
            max={60}
            onChange={(value) => handleChange("longBreak", value)}
          />
          <TimerSlider
            label="Session Rounds"
            unit="round"
            value={settings.sessionRounds}
            min={1}
            max={10}
            onChange={(value) => handleChange("sessionRounds", value)}
          />
          <div className="mt-5 flex items-center gap-4">
            <Label className="text-nowrap">Notification Sound</Label>
            <Select className="w-full" onValueChange={handleSoundChange} value={settings.notificationSound}>
              <SelectTrigger>
               <SelectValue>{Object.keys(notificationSounds).find(key => notificationSounds[key] === settings.notificationSound) || "Choose a sound..."}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {Object.entries(notificationSounds).map(([key, value]) => (
                  <SelectItem key={value} value={value}>{key}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </DialogDescription>
        <DialogFooter className="mt-4 flex justify-center gap-2">
          <Button variant="secondary" onClick={handleReset}>Reset to Default</Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}