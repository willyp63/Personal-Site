import * as d3 from 'd3';
import { BUBBLE_MAX_RADIUS, BUBBLE_MIN_RADIUS, BUBBLE_INITIAL_OPACITY, BUBBLE_CREATE_RATE } from './constants';
import { WPVector } from '@app/shared/utils/vector';

export interface WPBubbleNode extends d3.SimulationNodeDatum {
  initialRadius: number;
  radius: number;
  age: number;
  popped: boolean;
  initialOpacity: number;
  opacity: number;
  isRepel: boolean;
}

export class WPBubbleNodeFactory {
  static cursor(): WPBubbleNode {
    return { initialRadius: 0, radius: 0, age: 0, popped: false, opacity: 0, initialOpacity: 0, isRepel: false };
  }

  static repel(): WPBubbleNode {
    return { initialRadius: 0, radius: 0, age: 0, popped: false, opacity: 0, initialOpacity: 0, isRepel: true };
  }

  static random(roomSize: WPVector): WPBubbleNode {
    const initialRadius = WPBubbleNodeFactory.getRandomRadius(roomSize);
    return {
      initialRadius,
      radius: initialRadius,
      age: 0,
      x: Math.random() * roomSize.x,
      y: Math.random() * roomSize.y,
      popped: false,
      initialOpacity: BUBBLE_INITIAL_OPACITY,
      opacity: BUBBLE_INITIAL_OPACITY,
      isRepel: false,
    };
  }

  private static getRandomRadius(roomSize: WPVector) {
    const max = Math.max(roomSize.x, roomSize.y);
    return Math.random() * max * (BUBBLE_MAX_RADIUS - BUBBLE_MIN_RADIUS) + (BUBBLE_MIN_RADIUS * max);
  }
}

export class WPBubbleMachine {
  constructor(private nodes: WPBubbleNode[], private roomSize: () => WPVector) {}

  private delayCount = 0;

  tick() {
    this.delayCount--;

    if (this.delayCount <= 0) {
      const roomSize = this.roomSize();
      const newNode = WPBubbleNodeFactory.random(roomSize);
      newNode.y =roomSize.y + newNode.radius;
      this.nodes.push(newNode);

      this.delayCount = Math.floor(this.nodes.length / BUBBLE_CREATE_RATE);
    }
  }
}
