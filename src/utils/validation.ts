import { z } from 'zod';
import { HEART_RATE, SPO2, TEMPERATURE, BLOOD_PRESSURE } from '../constants/thresholds';

export const healthEntrySchema = z.object({
  heartRate: z
    .number({ required_error: 'Heart rate is required', invalid_type_error: 'Must be a number' })
    .min(HEART_RATE.min, `Must be at least ${HEART_RATE.min}`)
    .max(HEART_RATE.max, `Must be at most ${HEART_RATE.max}`),
  systolic: z
    .number({ required_error: 'Systolic is required', invalid_type_error: 'Must be a number' })
    .min(BLOOD_PRESSURE.systolic.min, `Must be at least ${BLOOD_PRESSURE.systolic.min}`)
    .max(BLOOD_PRESSURE.systolic.max, `Must be at most ${BLOOD_PRESSURE.systolic.max}`),
  diastolic: z
    .number({ required_error: 'Diastolic is required', invalid_type_error: 'Must be a number' })
    .min(BLOOD_PRESSURE.diastolic.min, `Must be at least ${BLOOD_PRESSURE.diastolic.min}`)
    .max(BLOOD_PRESSURE.diastolic.max, `Must be at most ${BLOOD_PRESSURE.diastolic.max}`),
  spo2: z
    .number({ required_error: 'SpO2 is required', invalid_type_error: 'Must be a number' })
    .min(SPO2.min, `Must be at least ${SPO2.min}`)
    .max(SPO2.max, `Must be at most ${SPO2.max}`),
  temperature: z
    .number({ required_error: 'Temperature is required', invalid_type_error: 'Must be a number' })
    .min(TEMPERATURE.min, `Must be at least ${TEMPERATURE.min}`)
    .max(TEMPERATURE.max, `Must be at most ${TEMPERATURE.max}`),
  symptoms: z.array(z.string()).default([]),
  notes: z.string().max(500, 'Notes must be 500 characters or fewer').optional(),
});

export type HealthEntryFormData = z.infer<typeof healthEntrySchema>;

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email format'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
