# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

set :haml, {ugly: true}

activate :gzip
activate :syntax
activate :directory_indexes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

# Build-specific configuration
configure :build do
  ignore 'bower_components/**/*'
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
 
end



# Deploy site to github pages
activate :deploy do |deploy|
  
  deploy.build_before = true

  deploy.method       = :sftp
  deploy.host         = "chambersjudd.com"
  deploy.path         = "/srv/tomjudd.co/public/htdocs/"
  deploy.user         = "admin"
  deploy.password     = "1b1sh0p"

end

# Use bower in sprockets - http://fearmediocrity.co.uk/2014/01/25/using_bower_with_middleman/
after_configuration do
  sprockets.append_path File.join root.to_s, "source/bower_components"
end

activate :alias