import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

const imagesUsers = {
  storage: multer.diskStorage({
    destination: resolve(
      __dirname,
      '..',
      '..',
      'tmp',
      'uploads',
      'images',
      'users'
    ),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};

const imagesThumbnails = {
  storage: multer.diskStorage({
    destination: resolve(
      __dirname,
      '..',
      '..',
      'tmp',
      'uploads',
      'images',
      'thumbnails'
    ),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};

const songs = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads', 'songs'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};

export { imagesUsers, imagesThumbnails, songs };
