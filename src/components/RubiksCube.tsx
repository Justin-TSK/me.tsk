"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// Dimensions of each cubie (in px) - taille agrandie
const CUBIE_SIZE = 86;
const HALF_SIZE = CUBIE_SIZE / 2;
const STEP = 93; // 86px + 7px seam

type Axis = "x" | "y" | "z";

interface Move {
  axis: Axis;
  layer: number; // -1 or 1
  deg: number;   // 90 or -90
}

interface CubieState {
  id: number;
  initialPos: [number, number, number];
  pos: [number, number, number];
  rot: number[][]; // 3x3 rotation matrix
}

// Monochrome shades of black, charcoal, and gray
const SHADES = {
  up: "#27272a",     // Zinc-800 (Graphite)
  down: "#09090b",   // Zinc-950 (Noir profond)
  front: "#3f3f46",  // Zinc-700 (Gris anthracite)
  back: "#18181b",   // Zinc-900 (Charbon)
  right: "#52525b",  // Zinc-600 (Gris moyen)
  left: "#71717a",   // Zinc-500 (Gris clair)
  base: "#121316",   // Corps du cubie
};

const MOVES: Move[] = [
  { axis: "x", layer: 1, deg: 90 },
  { axis: "x", layer: 1, deg: -90 },
  { axis: "x", layer: -1, deg: -90 },
  { axis: "x", layer: -1, deg: 90 },
  { axis: "y", layer: -1, deg: -90 },
  { axis: "y", layer: -1, deg: 90 },
  { axis: "y", layer: 1, deg: 90 },
  { axis: "y", layer: 1, deg: -90 },
  { axis: "z", layer: 1, deg: 90 },
  { axis: "z", layer: 1, deg: -90 },
  { axis: "z", layer: -1, deg: -90 },
  { axis: "z", layer: -1, deg: 90 },
];

function rotMatrix(axis: Axis, deg: number): number[][] {
  const rad = (deg * Math.PI) / 180;
  const c = Math.round(Math.cos(rad));
  const s = Math.round(Math.sin(rad));
  if (axis === "x") return [[1, 0, 0], [0, c, -s], [0, s, c]];
  if (axis === "y") return [[c, 0, s], [0, 1, 0], [-s, 0, c]];
  return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
}

function multMat(A: number[][], B: number[][]): number[][] {
  const R = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        R[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return R;
}

function multVec(M: number[][], v: [number, number, number]): [number, number, number] {
  return [
    M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
    M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
    M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2],
  ];
}

function createInitialCubies(): CubieState[] {
  const list: CubieState[] = [];
  let id = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        if (x === 0 && y === 0 && z === 0) continue;
        list.push({
          id: id++,
          initialPos: [x, y, z],
          pos: [x, y, z],
          rot: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
        });
      }
    }
  }
  return list;
}

export default function RubiksCube() {
  const [cubies, setCubies] = useState<CubieState[]>(createInitialCubies);
  const [activeMove, setActiveMove] = useState<Move | null>(null);
  const [animAngle, setAnimAngle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Rotation globale continue en 3D
  const [rotY, setRotY] = useState(35);
  const [rotX, setRotX] = useState(-20);

  // Dérive orbitale 3D fluide et continue
  useEffect(() => {
    let animId: number;
    const tick = () => {
      setRotY((prev) => (prev + 0.35) % 360);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Exécution d'un mouvement de couronne
  const executeMove = useCallback((move: Move): Promise<void> => {
    return new Promise((resolve) => {
      setActiveMove(move);
      setIsAnimating(true);
      setAnimAngle(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimAngle(move.deg);
        });
      });

      setTimeout(() => {
        const M = rotMatrix(move.axis, move.deg);
        const axisIdx = move.axis === "x" ? 0 : move.axis === "y" ? 1 : 2;

        setCubies((prev) =>
          prev.map((c) => {
            if (c.pos[axisIdx] === move.layer) {
              const newPos = multVec(M, c.pos);
              const newRot = multMat(M, c.rot);
              return { ...c, pos: newPos, rot: newRot };
            }
            return c;
          })
        );

        setIsAnimating(false);
        setActiveMove(null);
        setAnimAngle(0);

        setTimeout(resolve, 600); // Pause naturelle entre deux rotations
      }, 500); // Durée de rotation d'une face
    });
  }, []);

  // Boucle perpétuelle de rotation autonome des faces
  useEffect(() => {
    let isCancelled = false;

    const loop = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      while (!isCancelled) {
        const randomMove = MOVES[Math.floor(Math.random() * MOVES.length)];
        await executeMove(randomMove);
        if (isCancelled) break;
      }
    };

    loop();

    return () => {
      isCancelled = true;
    };
  }, [executeMove]);

  return (
    <div className="rubik-container relative flex items-center justify-center select-none w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[520px] h-[220px] sm:h-[320px] lg:h-[500px] mx-auto">
      {/* Halo d'ambiance sombre adaptatif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-zinc-800/25 blur-[60px] sm:blur-[75px] lg:blur-[90px] pointer-events-none" />

      {/* Scène 3D */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ perspective: 1250 }}
      >
        <div
          className="relative"
          style={{
            width: 0,
            height: 0,
            transformStyle: "preserve-3d",
            transform: `scale3d(var(--cube-scale, 1), var(--cube-scale, 1), var(--cube-scale, 1)) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            willChange: "transform",
          }}
        >
          {/* Les 26 cubies noirs et gris */}
          {cubies.map((cubie) => {
            const inActiveSlice = activeMove
              ? (activeMove.axis === "x" ? cubie.pos[0] : activeMove.axis === "y" ? cubie.pos[1] : cubie.pos[2]) === activeMove.layer
              : false;

            const R = cubie.rot;
            const tx = cubie.pos[0] * STEP;
            const ty = cubie.pos[1] * STEP;
            const tz = cubie.pos[2] * STEP;
            const restMatrix3d = `matrix3d(${R[0][0]}, ${R[1][0]}, ${R[2][0]}, 0, ${R[0][1]}, ${R[1][1]}, ${R[2][1]}, 0, ${R[0][2]}, ${R[1][2]}, ${R[2][2]}, 0, ${tx}, ${ty}, ${tz}, 1)`;

            let finalTransform = restMatrix3d;
            let finalTransition = "none";

            if (inActiveSlice && activeMove) {
              const ax = activeMove.axis === "x" ? 1 : 0;
              const ay = activeMove.axis === "y" ? 1 : 0;
              const az = activeMove.axis === "z" ? 1 : 0;
              finalTransform = `rotate3d(${ax}, ${ay}, ${az}, ${animAngle}deg) ${restMatrix3d}`;
              if (isAnimating) {
                finalTransition = `transform 500ms cubic-bezier(0.4, 0, 0.2, 1)`;
              }
            }

            return (
              <div
                key={cubie.id}
                className="absolute"
                style={{
                  width: CUBIE_SIZE,
                  height: CUBIE_SIZE,
                  left: -HALF_SIZE,
                  top: -HALF_SIZE,
                  transformStyle: "preserve-3d",
                  transform: finalTransform,
                  transition: finalTransition,
                }}
              >
                {/* 6 faces du cubie */}

                {/* Face Avant (+Z) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[2] === 1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.front }}
                    />
                  )}
                </div>

                {/* Face Arrière (-Z) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `rotateY(180deg) translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[2] === -1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.back }}
                    />
                  )}
                </div>

                {/* Face Droite (+X) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `rotateY(90deg) translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[0] === 1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.right }}
                    />
                  )}
                </div>

                {/* Face Gauche (-X) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `rotateY(-90deg) translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[0] === -1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.left }}
                    />
                  )}
                </div>

                {/* Face Haut (-Y) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `rotateX(90deg) translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[1] === -1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.up }}
                    />
                  )}
                </div>

                {/* Face Bas (+Y) */}
                <div
                  className="absolute inset-0 rounded-[8px] bg-[#0d0e12] border border-zinc-800/90 p-[5px] shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]"
                  style={{
                    transform: `rotateX(-90deg) translateZ(${HALF_SIZE}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {cubie.initialPos[1] === 1 && (
                    <div
                      className="w-full h-full rounded-[5px] border border-zinc-700/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                      style={{ backgroundColor: SHADES.down }}
                    />
                  )}
                </div>
              </div>
            );
          })}

          {/* Ombre portée au sol */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 270,
              height: 270,
              left: -135,
              top: -135,
              transform: `rotateX(90deg) translateZ(${STEP * 1.8}px)`,
              background: "radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 45%, transparent 70%)",
              filter: "blur(14px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
