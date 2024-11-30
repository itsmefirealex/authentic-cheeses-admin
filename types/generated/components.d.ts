import type { Schema, Struct } from '@strapi/strapi';

export interface CommonMenu extends Struct.ComponentSchema {
  collectionName: 'components_common_menus';
  info: {
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    theme: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonPageInformation extends Struct.ComponentSchema {
  collectionName: 'components_common_page_informations';
  info: {
    description: '';
    displayName: 'Page Information';
    icon: 'information';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PagesGalleryWithLinks extends Struct.ComponentSchema {
  collectionName: 'components_pages_gallery_with_links';
  info: {
    displayName: 'Gallery with Links';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagesImageWithCtaAndLinks extends Struct.ComponentSchema {
  collectionName: 'components_pages_image_with_cta_and_links';
  info: {
    displayName: 'Image with CTA and Links';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PagesTitleAndDescription extends Struct.ComponentSchema {
  collectionName: 'components_pages_title_and_descriptions';
  info: {
    description: '';
    displayName: 'Title and Description';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ZonesAccordionContent extends Struct.ComponentSchema {
  collectionName: 'components_zones_accordion_contents';
  info: {
    displayName: 'Accordion Content';
  };
  attributes: {
    list: Schema.Attribute.Component<'pages.title-and-description', true>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZonesGalleryContent extends Struct.ComponentSchema {
  collectionName: 'components_zones_gallery_contents';
  info: {
    description: '';
    displayName: 'Gallery Content';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    list: Schema.Attribute.Component<'pages.gallery-with-links', true>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZonesImageContent extends Struct.ComponentSchema {
  collectionName: 'components_zones_image_contents';
  info: {
    description: '';
    displayName: 'Image Content';
  };
  attributes: {
    contentSlider: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    list: Schema.Attribute.Component<'pages.image-with-cta-and-links', true>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZonesPageLanding extends Struct.ComponentSchema {
  collectionName: 'components_zones_page_landings';
  info: {
    description: '';
    displayName: 'Page Landing';
  };
  attributes: {
    bg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Schema.Attribute.RichText;
    ellipseTitle: Schema.Attribute.String;
    links: Schema.Attribute.Component<'common.menu', true>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZonesTitleContent extends Struct.ComponentSchema {
  collectionName: 'components_zones_title_contents';
  info: {
    description: '';
    displayName: 'Title Content';
  };
  attributes: {
    list: Schema.Attribute.Component<'pages.title-and-description', true>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ZonesVideoContent extends Struct.ComponentSchema {
  collectionName: 'components_zones_video_contents';
  info: {
    displayName: 'Video Content';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    poster: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    theme: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.menu': CommonMenu;
      'common.page-information': CommonPageInformation;
      'pages.gallery-with-links': PagesGalleryWithLinks;
      'pages.image-with-cta-and-links': PagesImageWithCtaAndLinks;
      'pages.title-and-description': PagesTitleAndDescription;
      'zones.accordion-content': ZonesAccordionContent;
      'zones.gallery-content': ZonesGalleryContent;
      'zones.image-content': ZonesImageContent;
      'zones.page-landing': ZonesPageLanding;
      'zones.title-content': ZonesTitleContent;
      'zones.video-content': ZonesVideoContent;
    }
  }
}
