let mongoose = require('mongoose');
let Workout = require('../models/workout')
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let http = require('http');


let server = http.createServer(app);
let should = chai.should();

chai.use(chaiHttp);

describe('Workouts', () => {
    beforeEach((done) => { //Before each test we empty the database
        Workout.remove({}, (err) => { 
           done();         
        });     
    });
  
    after(done => {
    // After all tests we close the server and disconnect from the database
    server.close();
    mongoose.disconnect();
    done();
    });
  
    // describe('GET/api/workouts', () => {
    //   it('it should GET all the workouts', (done) => {
    //       let expectedWorkout = new Workout({
    //         date: 02/20/1991,
    //         distance: 20,
    //         duration: 40,
    //         calories: 200
    //       })
  
    //       expectedWorkout.save(function (err, workout) {
    //           if (err) return console.error(err);
    //            chai.request(server)
    //             .get('/api/workouts')
    //             .end((err, res) => {
    //                 res.should.have.status(200);
    //                 res.body.should.be.a('array');
    //                 res.body.length.should.be.eql(1);
    //               done();
    //             });
    //       });
    //   });
    // });

  
    describe('POST/api/workouts', () => {
      it('it should add a new workout', (done) => {
          let expectedWorkout = new Workout({
            date: 02/20/1991,
            distance: 20,
            duration: 40,
            calories: 200
          });
  
        chai.request(server)
            .post('/api/workouts')
            .send(expectedWorkout)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property("id");
              res.body.should.have.property("date").eql(expectedWorkout.date);
              res.body.should.have.property("distance").eql(expectedWorkout.distance);
              res.body.should.have.property("duration").eql(expectedWorkout.duration);
              res.body.should.have.property("calories").eql(expectedWorkout.calories);
              done();
            });
      });
    }); 
  
    describe('GET /api/workouts/:id', () => {
      it('it should get an existing workout', (done) => {
        let existingWorkout = new Workout({
          date: 02/20/1991,
          distance: 20,
          duration: 40,
          calories: 200
        });
  
        existingWorkout.save(function (err, workout) {
          if (err) return console.error(err);
          chai.request(server)
            .get('/api/workouts/' + workout.id)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property("id");
              res.body.should.have.property("date").eql(existingWorkout.date);
              res.body.should.have.property("distance").eql(existingWorkout.distance);
              res.body.should.have.property("duration").eql(existingWorkout.duration);
              res.body.should.have.property("calories").eql(existingWorkout.calories);
              done();
            });
        });
      });
    });
  
    // describe('PUT /api/workouts/:id', () => {
    //   it('it should update an existing workout', (done) => {
    //     let existingWorkout = new Workout({
    //       date: 02/20/1991,
    //       distance: 20,
    //       duration: 40,
    //       calories: 200
    //     });
    //     let expectedWorkout = new Workout({
    //       date: existingWorkout.date,
    //       distance: existingWorkout.distance,
    //       duration: existingWorkout.duration,
    //       calories: existingWorkout.calories
          
   
    //     });
  
    //     existingWorkout.save(function (err, workout) {
    //       if (err) return console.error(err);
    //       chai.request(server)
    //         .put('/api/workouts/' + workout.id)
    //         .send(expectedWorkout)
    //         .end((err, res) => {
    //           res.should.have.status(204);
    //           res.body.should.be.empty;
  
    //           Workout.findOne({_id: existingWorkout.id}, function(err, foundWorkout) {
    //             if (err) return console.error(err);
    //             foundWorkout.should.have.property("date").eql(expectedWorkout.date);
    //             foundWorkout.should.have.property("distance").eql(expectedWorkout.distance);
    //             foundWorkout.should.have.property("duration").eql(expectedWorkout.duration);
    //             foundWorkout.should.have.property("calories").eql(expectedWorkout.calories);
                
    //             done();
    //           })
    //         });
    //     });
    //   });
    // });  
  
    describe('DELETE /api/workouts/:id', () => {
      it('it should delete an existing workout', (done) => {
        let existingWorkout = new Workout({
          date: 02/20/1991,
          distance: 20,
          duration: 40,
          calories: 200
        });
  
        existingWorkout.save(function (err, workout) {
          if (err) return console.error(err);
          chai.request(server)
            .delete('/api/workouts/' + workout.id)
            .end((err, res) => {
              res.should.have.status(204);
              res.body.should.be.empty;
  
              Workout.findOne({_id: existingWorkout.id}, function(err, workout) {
                if (err) return console.error(err);
                should.not.exist(workout);
                done();
              })
            });
        });
      });
    });
  
  });