import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseCarousel extends Schema.Component {
  collectionName: 'components_course_carousels';
  info: {
    displayName: 'carousel';
  };
  attributes: {
    courseIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    cardColor: Attribute.String;
  };
}

export interface CourseTariff extends Schema.Component {
  collectionName: 'components_course_tariffs';
  info: {
    displayName: 'tariff';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Integer;
    descriptionList: Attribute.Blocks;
    isMostPopular: Attribute.Boolean;
    duration: Attribute.String;
  };
}

export interface CourseTechnology extends Schema.Component {
  collectionName: 'components_course_technologies';
  info: {
    displayName: 'technology';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CourseTechology extends Schema.Component {
  collectionName: 'components_course_techologies';
  info: {
    displayName: 'techology';
  };
  attributes: {
    name: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MainPageHeader extends Schema.Component {
  collectionName: 'components_main_page_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    title: Attribute.Blocks;
    description: Attribute.Blocks;
  };
}

export interface PreviewMainPage extends Schema.Component {
  collectionName: 'components_preview_main_pages';
  info: {
    displayName: 'main-page';
    description: '';
  };
  attributes: {
    Title: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course.carousel': CourseCarousel;
      'course.tariff': CourseTariff;
      'course.technology': CourseTechnology;
      'course.techology': CourseTechology;
      'main-page.header': MainPageHeader;
      'preview.main-page': PreviewMainPage;
    }
  }
}
