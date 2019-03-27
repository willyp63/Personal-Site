import { WPVector } from "@app/shared/utils/vector";
import { WPBubbleNode } from "./bubble";
import { BOUNCINESS } from "./constants";

const GREATER_THAN = (a: number, b: number) => a > b;
const LESS_THAN = (a: number, b: number) => a < b;

export const gravityForce = (nodes: WPBubbleNode[], magnitude: WPVector) => {
  return () => {
    nodes.forEach(node => {
      node.vx += magnitude.x;
      node.vy += magnitude.y;
    });
  };
};

export const ceilingForce = (nodes: WPBubbleNode[], roomSize: () => WPVector, roomPadding: number = 0) => {
  return wallForce(nodes, roomSize, roomPadding, false, true);
};

export const leftWallForce = (nodes: WPBubbleNode[], roomSize: () => WPVector, roomPadding: number = 0) => {
  return wallForce(nodes, roomSize, roomPadding, true, true);
};

export const rightWallForce = (nodes: WPBubbleNode[], roomSize: () => WPVector, roomPadding: number = 0) => {
  return wallForce(nodes, roomSize, roomPadding, true, false);
};

const wallForce = (nodes: WPBubbleNode[], roomSize: () => WPVector, roomPadding: number, isVertical: boolean, isMin: boolean) => {
  const positionKey = isVertical ? 'x' : 'y';
  const velocityKey = `v${positionKey}`;
  const compareFn = isMin ? LESS_THAN : GREATER_THAN;

  return () => {
    const boundaryPosition = isMin ? roomPadding : roomSize()[positionKey] - roomPadding;
    
    nodes.forEach(node => {
      const nodeNextPosition = node[positionKey] + node[velocityKey];
      const radiusInfluence = isMin ? node.radius * -1 : node.radius;

      if (compareFn(nodeNextPosition + radiusInfluence, boundaryPosition)) {
        node[velocityKey] *= -BOUNCINESS;

        node[positionKey] = (boundaryPosition - radiusInfluence) * 2 - nodeNextPosition; // move node away from boundary equal to how much node was overlapping boundary
        node[positionKey] -= node[velocityKey]; // step back a tick, since we advanced a tick in the previous line
      }
    });
  }
};
