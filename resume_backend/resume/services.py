import os
from rest_framework.exceptions import ValidationError


def get_path_upload_photo(instance, file):
    """
    Path upload of resume photo file. Format: media/resume_photo/user_id_1/photo.jpg
    """
    return f'resume_photo/user_id_{instance.user.id}/{file}'


def get_path_upload_pdf(instance, file):
    """
    Path upload of pdf file. Format: media/pdf_files/user_id_1/file.pdf
    """
    return f'pdf_files/user_id_{instance.user.id}/{file}'


def validate_size_image(file_obj):
    """File size validate"""

    megabyte_limit = 5
    if file_obj.size > megabyte_limit * 1024 * 1024:
        raise ValidationError(f'Max size photo - {megabyte_limit} MB')


def delete_old_file(path_file):
    """Delete old file"""

    if os.path.exists(path_file):
        os.remove(path_file)
