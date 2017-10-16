const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true
    },
    profile: {
      name: {
        type: String,
        default: 'name'
      },
      picture: {
        type: String,
        default:
        'http://emblemsbattlefield.com/uploads/posts/2014/10/facebook-default-photo-male_1.jpg'
      },
      description: {
        type: String,
        default: 'Describe About Yourself'
      },
      dob: {
        type: String,
        default: 'dob'
      },
      gender: {
        type: String,
        default: 'gender'
      },
      address: {
        Line1: {
          type: String,
          default: 'H.No.'
        },
        Line2: {
          type: String,
          default: 'Street'
        },
        country: {
          type: String,
          default: 'Country'
        },
        region: {
          type: String,
          default: 'State'
        },
        city: {
          type: String,
          default: 'City'
        },
        postalCode: {
          type: String,
          default: 'postal Code'
        }
        },
      education: {
        primary: {
          type: String,
          default: 'Primary'
        },
        highSchool: {
          type: String,
          default: 'Secondary'
        },
        university: {
          type: String,
          default: 'University'
        }
      },
      phone: {
        type: String,
        default: 'Phone'
      }
    },
    lists: [
        {
            id: {
                type: Number
            },
            heading: {
                type: String,
                default: 'heading'
            },
            category: {
                type: String,
                default: ''
            },
            statement: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            displayImage: {
                type: String,
                default: ''
            },
            addedOn: {
                type: String,
                default: ''
            },
            upVote: {
                type: String,
                default: 0
            },
            postedBy: {
                type: String,
                default: ''
            },
            acceptedCount: {
                type: String,
                default: 0
            },
            downVote: {
                type: String,
                default: 0
            }
        }
    ],
    answers: [
        {
            id: {
                type: Number
            },
            statement: {
                type: String,
                default: 'statement'
            },
            addedOn: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            upVote: {
                type: Number,
                default: 0
            },
            downVote: {
                type: Number,
                default: 0
            }
        }
    ],
    watchingList: [
        {
            id: {
              type: Number
            },
            displayImage: String,
            profileImage: String,
            heading: String,
            postedBy: String,
            addedOn: String,
            answerCounts: Number,
            upVotes: Number,
            downVotes: Number,
            views: Number
        }
    ],
    preferenceList: [
        {
            id: Number,
            displayImage: String,
            profileImage: String,
            heading: String,
            postedBy: String,
            addedOn: String,
            answerCounts: Number,
            upVotes: Number,
            downVotes: Number,
            views: Number,
            position: Number
        }
    ],
    watchingTopic: [
        {
            type: String
        }
    ],
    interestCategory: [
        {
            type: String
        }
    ],
    reputation: {
        type: Number,
        default: 0
    },
    followingUser: [
        {
            type: String
        }
    ],
    followerCount: {
        type: Number,
        default: 0
    }
});
const model = mongoose.model('userDoc', schema);
module.exports = {
    userModel: model
};
