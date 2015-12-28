MODULE = deloreanTz
EXPORT = $(MODULE)
SOURCE = ./index.js
TARGET = ./dist/delorean-tz.js
TARGET_MIN = ./dist/delorean-tz.min.js
BROWSERIFY = ./node_modules/.bin/browserify
UGLIFY =  ./node_modules/.bin/uglifyjs
NPM = npm

test:
	./node_modules/.bin/mocha --reporter spec

clean:
	rm -rf ./dist

build: clean $(TARGET) $(TARGET_MIN)

$(TARGET): $(SOURCE) node_modules
	mkdir dist
	$(BROWSERIFY) -s $(EXPORT) -o $@ -- $<

$(TARGET_MIN): $(TARGET)
	$(UGLIFY) $< --compress --output $@

node_modules:
	$(NPM) install

 .PHONY: test build clean