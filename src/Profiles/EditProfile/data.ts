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
  fullName: "",
  email: "",
  mobile: "",
  panNumber: "",
  nameAsPan: "",
  dob: "",
  userType: "Buyer",
  role: "Individual",
  companyName: "",
};
