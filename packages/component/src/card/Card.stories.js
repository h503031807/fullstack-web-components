import { CardComponent } from "./Card";

export default {
  title: "Components/Card",
  argTypes: {
    image: {
      control: { type: 'text' },
    },
    headline: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'text' },
    },
  },
};

const PrimaryTemplate = ({ image, headline, content, link }) => `
<in-card>
  <img slot="header" src="${image}" />
  <h4 slot="header">${headline}</h4>
  <p slot="content">
    ${content}
  </p>
  <a slot="footer" href="#">${link}</a>
</in-card>`;
export const ImageCard = PrimaryTemplate.bind({});