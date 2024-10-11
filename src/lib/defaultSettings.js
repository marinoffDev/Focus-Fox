import { notificationSounds } from "@/lib/notificationSounds"

export const defaultSettings = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  sessionRounds: 4,
  notificationSound: notificationSounds["Mission Accomplished"]
}