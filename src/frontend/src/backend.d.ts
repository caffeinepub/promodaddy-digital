import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    id: bigint;
    icon: string;
    name: string;
    description: string;
    category: string;
}
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    serviceInterest: string;
    message: string;
    phone: string;
}
export interface SiteStat {
    id: bigint;
    textLabel: string;
    value: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addService(name: string, description: string, icon: string, category: string): Promise<void>;
    addStat(textLabel: string, value: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllServices(): Promise<Array<Service>>;
    getAllStats(): Promise<Array<SiteStat>>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerAdmin(): Promise<boolean>;
    submitContactForm(name: string, email: string, phone: string, message: string, serviceInterest: string): Promise<void>;
    updateService(id: bigint, name: string, description: string, icon: string, category: string): Promise<void>;
    updateStat(id: bigint, textLabel: string, value: string): Promise<void>;
}
