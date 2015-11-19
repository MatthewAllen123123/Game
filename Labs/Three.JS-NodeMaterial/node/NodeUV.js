/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.NodeUV = function( uv2 ) {
	
	this.uv2 = uv2 || false;
	
	THREE.NodeReference.call( this, 'v2' );
	
};

THREE.NodeUV.prototype = Object.create( THREE.NodeReference.prototype );
THREE.NodeUV.prototype.constructor = THREE.NodeUV;

THREE.NodeUV.prototype.generate = function( material, shader, output ) {
	
	material.needsUv = material.needsUv || !this.uv2;
	material.needsUv2 = material.needsUv2 || this.uv2;

	if (shader == 'vertex') this.name = this.uv2 ? 'uv2' : 'uv';
	else this.name = this.uv2 ? 'vUv2' : 'vUv';
	
	return THREE.NodeReference.prototype.generate.call(this, material, shader, output);

};