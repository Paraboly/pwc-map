export enum EStoryStates {
  Initial = 1,
  Playing,
  Paused,
  Ended
}

export interface StoryStatus {
  state: EStoryStates;
  remainingDuration: number;
}

export default interface PwcMapStoryModel {
  status: StoryStatus;
  duration: number;
  metadata?: Object;
  target: {
    center: [number, number];
    bearing?: number;
    zoom?: number;
    pitch?: number;
    duration?: number;
  };
}
