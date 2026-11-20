import { site } from "../data/site";

export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

export const messages = {
  general:
    "Hello Woodcraft Furniture, I’d like to know more about your showroom in Kottayam.",
  custom:
    "Hello Woodcraft Furniture, I’d like to discuss a custom furniture design for my home. Please let me know how we can get started.",
  workspace:
    "Hello Woodcraft Furniture, I’m looking for workspace furniture and would like to discuss a desk or study unit for my home.",
  product: (product) =>
    `Hello Woodcraft Furniture, I'm interested in the ${product.name} priced at ${product.price}. Please share more details.`,
  enquiry: ({ name, phone, interest, message }) =>
    [
      "Hello Woodcraft Furniture, I’d like to enquire.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      `Message: ${message}`,
    ].join("\n"),
};
