const calibrateGaze = () => {
    GazeCloudAPI.StartEyeTracking();
    GazeCloudAPI.OnCalibrationComplete = function () {
        console.log('gaze Calibration Complete');
        modal.style.display = 'none';
        gazeCalibrated = true;
    };
    GazeCloudAPI.OnCamDenied = function () {
        console.log('camera access denied');
    }; 
    GazeCloudAPI.OnError = function (msg) {
        console.log('err: ' + msg);
    };
    GazeCloudAPI.UseClickRecalibration = true; 
}

