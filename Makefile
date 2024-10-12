# Install dependencies
install:
	brew install node
	brew install watchman
	npm install 

# Run the application (i am very unsure about this one)
run:
	cd hackharvard 
	npx expo start
