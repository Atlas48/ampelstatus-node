const config = {
  ts: {
    default: {
      tsconfig: './tsconfig.json'
    }
  }
}
export default function(grunt) {
  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-ts');
  grunt.registerTask('default', ['ts']);
}
