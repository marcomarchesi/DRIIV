/* 
* Particle Engine
* @author Marco Marchesi
*
*/

function ParticleEngine(object){

  this.material;
  this.particles;
  this.texture;
  this.enabled = false;
  this.object = object;

  this.geometry = new THREE.Geometry();

  for ( i = 0; i < 2000; i ++ ) {

    var vertex = new THREE.Vector3();
    vertex.x = Math.random() * 80 - 10;
    vertex.y = Math.random() * 40 - 10;
    vertex.z = Math.random() * 80 - 10;

    this.geometry.vertices.push( vertex );

  }

    this.color = 0xaaaaaa;
    this.size  = Math.random()*0.05;
    var img = THREE.ImageUtils.loadTexture('textures/rain.png');
    
    this.material = new THREE.PointCloudMaterial( {fog:true,transparent:true,opacity:0.1,map: img} );
    this.particles = new THREE.PointCloud( this.geometry, this.material );

    this.particles.rotation.y = Math.random() * 6;
    this.particles.rotation.z = Math.random() * 6;
  
};

ParticleEngine.prototype.start = function(){
  this.enabled = true;
  this.object.add(this.particles); //it rains just on top of the camera, ahahahah!
};

ParticleEngine.prototype.stop = function(){
  this.enabled = false;
};

ParticleEngine.prototype.update = function(dt){
  this.particles.rotation.y += Math.PI * Math.random();
};
  