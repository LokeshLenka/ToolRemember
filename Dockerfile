# Base image for PHP
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    libonig-dev \
    libzip-dev \
    zip \
    unzip \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    libssl-dev \
    libicu-dev \
    git \
    nano \
    libpq-dev \
    libmcrypt-dev \
    default-mysql-client

# Install PHP extensions needed for Laravel and MySQL
RUN docker-php-ext-install pdo pdo_mysql mysqli zip exif pcntl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Set working directory
WORKDIR /var/www

# Copy application files
COPY . .

# Create SQLite database
RUN touch database/database.sqlite
RUN chmod 666 database/database.sqlite

# Install Composer dependencies
RUN composer install --no-dev --optimize-autoloader

# Build assets
RUN npm install
# RUN npm run dev

# Set permissions
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache /var/www/public/build /var/www/database
RUN chmod -R 775 /var/www/storage /var/www/bootstrap/cache /var/www/database

# Expose port 9000 for PHP-FPM
EXPOSE 8000

# Start PHP-FPM
CMD ["php-fpm"]
