import { useState, useEffect } from "react";
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
import { Switch } from "@/components/ui/switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { defaultSettings } from "@/lib/defaultSettings"
import { notificationSounds } from "@/lib/notificationSounds"
import TimerSlider from "@/components/ui/TimerSlider";

export default function Customize({ timerSettings, onSaveTimerSettings }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(timerSettings);

  useEffect(() => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      pomodoro: timerSettings.pomodoro / 60,
      shortBreak: timerSettings.shortBreak / 60,
      longBreak: timerSettings.longBreak / 60,
      sessionRounds: timerSettings.sessionRounds,
      notificationSound: timerSettings.notificationSound,
      autoStartPomodoro : timerSettings.autoStartPomodoro,
      autoStartBreak : timerSettings.autoStartBreak
    }));
  }, [timerSettings]);

  // Handle changes in settings
  const handleChange = (type, value) => {
    setSettings((prevSettings) => ({ ...prevSettings, [type]: value }));
  };

  // Handle notification sound change and play preview sound
  const handleSoundChange = (value) => {
    setSettings((prevSettings) => ({ ...prevSettings, notificationSound: value }));
    const sound = new Audio(value);
    sound.play();
  };

  // When resetting to default, always fallback to the hardcoded default values
  const handleReset = () => {
    setSettings({
      pomodoro: defaultSettings.pomodoro / 60,
      shortBreak: defaultSettings.shortBreak / 60,
      longBreak: defaultSettings.longBreak / 60,
      sessionRounds: defaultSettings.sessionRounds,
      notificationSound: defaultSettings.notificationSound,
      autoStartPomodoro : defaultSettings.autoStartPomodoro,
      autoStartBreak : defaultSettings.autoStartBreak
    });
  };
  
  // Only save user preferences if they actually click the Save Changes button
  const handleSave = () => {
    onSaveTimerSettings({
      pomodoro: settings.pomodoro * 60,
      shortBreak: settings.shortBreak * 60,
      longBreak: settings.longBreak * 60,
      sessionRounds: settings.sessionRounds,
      notificationSound: settings.notificationSound,
      autoStartPomodoro : settings.autoStartPomodoro,
      autoStartBreak : settings.autoStartBreak
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FontAwesomeIcon icon={faGear} size="lg" className="mr-2" />Customize
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Settings</DialogTitle>
          <Separator />
        </DialogHeader>
        <DialogDescription asChild>
          <div>
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
            <div className="mt-5 flex items-center justify-between">
              <Label>Auto Start Pomodoros</Label>
              <Switch checked={settings.autoStartPomodoro} onCheckedChange={(value) => handleChange("autoStartPomodoro", value)} />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <Label>Auto Start Breaks</Label>
              <Switch checked={settings.autoStartBreak} onCheckedChange={(value) => handleChange("autoStartBreak", value)} />
            </div>
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