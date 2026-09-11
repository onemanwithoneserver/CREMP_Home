export const rolesData = {
  buyer: ["Firm", "Individual"],
  seller: ["Agent", "Broker", "Owner", "Franchisee", "Employee"]
};

export interface EditProfileFormData {
  fullName: string;
  email: string;
  mobile: string;
  panNumber: string;
  nameAsPan: string;
  dob: string;
  userType: "Buyer" | "Seller";
  role: string;
  companyName?: string;
}

export const initialFormData: EditProfileFormData = {
  fullName: "admin",
  email: "admin@gmail.com",
  mobile: "+91 9191919494092155",
  panNumber: "",
  nameAsPan: "",
  dob: "",
  userType: "Buyer",
  role: "Individual",
  companyName: "",
};
