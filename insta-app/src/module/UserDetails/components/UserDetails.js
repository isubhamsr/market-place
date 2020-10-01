import React from 'react'

export default function UserDetails() {
    return (
        <form class="row g-3" style={{ marginTop: '24px' }}>
            <div class="col-12">
                <input type="file" class="form-file-input" id="customFile" />
                <label class="form-file-label" for="customFile">
                    <span class="form-file-text">Upload Profile Picture</span>
                    <span class="form-file-button">Browse</span>
                    <span class="form-file-button btn btn-primary" style={{ 'margin-left': '15px' }}>Upload</span>
                </label>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Add Bio</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Website</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Gender</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">Business Type</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Small</option>
                    <option>Large</option>
                    <option>Big</option>
                </select>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    )
}
