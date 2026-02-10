'use client';
import { ReactNode, useMemo, Children, ElementType } from 'react';
import { motion, Variants } from 'framer-motion'; 
import React from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: ElementType;
  asChild?: ElementType;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

// Fixed helper: Explicitly cast parts to object to allow spreading
const addDefaultVariants = (variants: Variants): Variants => ({
  ...variants,
  hidden: { 
    ...(defaultItemVariants.hidden as object), 
    ...(variants.hidden as object) 
  },
  visible: { 
    ...(defaultItemVariants.visible as object), 
    ...(variants.visible as object) 
  },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = useMemo(() => ({
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  }), [preset]);

  // FIX FOR LINE 137: Force the type to Variants
  const containerVariants = (variants?.container || selectedVariants.container) as Variants;
  const itemVariants = (variants?.item || selectedVariants.item) as Variants;

  // FIX FOR LINE 124 & 128: Cast as any to bypass the ElementType/IntrinsicElements conflict
  const MotionComponent = useMemo(
    () => (motion as any).create(as),
    [as]
  );
  
  const MotionChild = useMemo(
    () => (motion as any).create(asChild),
    [asChild]
  );

  return (
    <MotionComponent
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}

export { AnimatedGroup };