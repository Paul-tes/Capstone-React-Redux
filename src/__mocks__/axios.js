const mockResponse = {
  data: [
    {
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
      ],
      id: 1,
      name: 'Rocket 1',
      reserved: true,
    },
    {
      flickr_images: [
        'https://imgur.com/azYafd8.jpg',
      ],
      id: 2,
      name: 'Rocket 2',
      reserved: false,
    },
  ],
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
